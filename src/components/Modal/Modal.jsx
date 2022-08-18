import React from "react";
import { motion } from "framer-motion";
import Typography from "../Typography/Typography";
import "./style.scss";
const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
const dropIn = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

/**
 * @param {func} import
 * import { AnimatePresence } from "framer-motion";
 * @param {import} state
 * const [modalOpen, setModalOpen] = useState(false);
 * @param {func} close
 * const close = () => setModalOpen(false);
 * @param {func} open
 * const open = () => setModalOpen(true);
 * @param {string} presenseAttributes
 * initial={false} exitBeforeEnter={true}
 * @param {string} modalAttributes
 *  modalOpen={modalOpen} handleClose={close}
 */

const Modal = ({ handleClose, children }) => {
  return (
    <Backdrop>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
        <div className="closemodal">
          <button onClick={handleClose}>
            <Typography variant="button">Close</Typography>
          </button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
