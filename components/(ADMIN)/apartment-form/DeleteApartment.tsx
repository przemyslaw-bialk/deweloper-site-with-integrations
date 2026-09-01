"use client";

import { deleteApartmentAction } from "@/actions/apartment";
import { useState } from "react";

type Props = {
  id: string;
};

const DeleteApartment = ({ id }: Props) => {
  const [showForm, setShowForm] = useState(false);

  const handleDelete = async () => {
    await deleteApartmentAction(id);
    setShowForm(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setShowForm(true)}
        className="rounded-lg border px-3 py-1 text-sm"
      >
        Usuń
      </button>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="max-w-md rounded-xl bg-background p-6 ">
            <p className="text-center">
              Czy na pewno chcesz usunąć mieszkanie?
            </p>

            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={handleDelete}
                className="rounded-lg border px-4 py-2 text-sm"
              >
                Usuń
              </button>

              <button
                onClick={() => setShowForm(false)}
                className="rounded-lg border px-4 py-2 text-sm"
              >
                Anuluj
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteApartment;
