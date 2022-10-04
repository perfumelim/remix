import React, { useRef } from "react";

function Dialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const clickOpenModal = () => {
    const favDialog = dialogRef.current;
    if (dialogRef.current) {
        dialogRef.current.showModal();
    }
  };
  return (
    <div>
      <main className="flex w-screen flex-col items-center justify-center pt-40 text-center">
        <h2 className="text-3xl text-stone-600">Dialog</h2>
        <p className="mt-16 text-xl">
          Click buttons below and the dialogs will open in the top layer. <br />
          Top layer elements will appear on top of any element, including those
          with the highest z-index.
        </p>
        <button onClick={clickOpenModal} className="mt-20">
          Open Dialog
        </button>
      </main>
      <dialog
        ref={dialogRef}
        id="favDialog"
        className="rounded-md p-16 backdrop:bg-pink-200 backdrop:bg-opacity-50"
      >
        <form method="dialog">
          <p>
            <label>
              Favorite animal:
              <select>
                <option value="default">Choose…</option>
                <option>Brine shrimp</option>
                <option>Red panda</option>
                <option>Spider monkey</option>
              </select>
            </label>
          </p>
          <div className="mt-8 flex justify-between">
            <button value="cancel">Cancel</button>
            <button id="confirmBtn" value="default">
              Confirm
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default Dialog;
