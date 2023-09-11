// import React, { useState } from "react";
// import { Modal } from "antd";
// function UnuserModal() {
//   const [showModal, setShowModal] = useState(false);
//   const handleShowModal = () => {
//     setShowModal(true);
//   };
// const handleCloseModal = () => {
//     setShowModal(false);
// }
//   return (
//     <div>
//       <button onClick={handleShowModal}>Show Modal</button>
//       {showModal && (
//         <Modal
//           title="This is a modal"
//           content="This is the content of the modal"
//           onClose={handleCloseModal}
//           visible={showModal}
//         />
//       )}
//     </div>
//   );
// }

// export default UnuserModal;


import React from "react";
import MainModal from "./MainModal";


function ShareMovieModal({ modalOpen, setModalOpen, item }) {
  
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white rounded-2xl">
        <h2 className="text-2xl">
        Please log in to save a movie
        </h2>
       
      </div>
    </MainModal>
  );
}

export default ShareMovieModal;
