import { Dispatch, SetStateAction } from "react";

type Prop = {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
};

const EditApartmentButton = ({ setIsEditing }: Prop) => {
  return (
    <button
      type="button"
      onClick={() => setIsEditing(true)}
      className="rounded-lg border px-3 py-1 text-sm"
    >
      Edytuj
    </button>
  );
};

export default EditApartmentButton;
