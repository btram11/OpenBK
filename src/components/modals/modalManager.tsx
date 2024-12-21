"use client";
import { useModal } from "@/context/ModalContext";
import UploadProfileModal from "./UploadProfileModal";
import AddCourseModal from "./AddCourseModal";

const ModalLookup: Record<string, React.FC<any>> = {
  UploadProfileModal: UploadProfileModal,
  AddCourseModal: AddCourseModal,
};

const ModalManager = () => {
  const { modal, closeModal } = useModal();

  if (!modal) return null;
  const Modal = ModalLookup[modal.name];

  return <Modal onClose={closeModal} {...modal.props} />;
};

export default ModalManager;
