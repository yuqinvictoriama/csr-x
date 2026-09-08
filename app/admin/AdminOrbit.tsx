"use client";

import { useEffect, useRef, useState } from "react";
import type { Admin } from "../adminData";

/** "orbit" spins the circles on a wheel; "row" lines them up. */
type AdminLayout = "orbit" | "row";

export default function AdminOrbit({ admins, layout = "orbit" }: { admins: Admin[]; layout?: AdminLayout }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);

  useEffect(() => {
    if (selectedAdmin && !dialogRef.current?.open) dialogRef.current?.showModal();
  }, [selectedAdmin]);

  const openProfile = (admin: Admin) => setSelectedAdmin(admin);
  const closeProfile = () => dialogRef.current?.close();

  return (
    <div className={`admin-orbit-stage${layout === "row" ? " is-row" : ""}`} aria-label="CSR-x administrative team">
      <div className="admin-orbit-wheel">
        {admins.map((admin) => {
          const profile = (
            <>
              <img src={admin.image} alt={admin.name} />
              <div className="admin-orbit-info">
                <h2>{admin.name}</h2>
                <p>{admin.role}</p>
              </div>
            </>
          );

          return (
            <article className="admin-orbit-node" key={admin.name}>
              <div className="admin-orbit-upright">
                <button
                  className="admin-orbit-profile admin-profile-trigger"
                  type="button"
                  aria-haspopup="dialog"
                  aria-controls="admin-profile"
                  onClick={() => openProfile(admin)}
                >
                  {profile}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <dialog
        className="admin-profile-dialog"
        id="admin-profile"
        ref={dialogRef}
        aria-labelledby="admin-profile-title"
        onClose={() => setSelectedAdmin(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeProfile();
        }}
      >
        {selectedAdmin && <div className="admin-profile-modal">
          <div className="admin-profile-modal-photo">
            <img src={selectedAdmin.image} alt={selectedAdmin.name} />
          </div>
          <div className="admin-profile-modal-copy">
            <button className="admin-profile-close" type="button" onClick={closeProfile} aria-label={`Close ${selectedAdmin.name} profile`}>×</button>
            <h2 id="admin-profile-title">{selectedAdmin.name}</h2>
            <p className="admin-profile-role">{selectedAdmin.role}</p>
            <p className="admin-profile-school">{selectedAdmin.school}</p>
            {selectedAdmin.major && <p className="admin-profile-major">{selectedAdmin.major}</p>}
            <p className="admin-profile-since">With CSR-x since {selectedAdmin.since}</p>
          </div>
        </div>}
      </dialog>
    </div>
  );
}
