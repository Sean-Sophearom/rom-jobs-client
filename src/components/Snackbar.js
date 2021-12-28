import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbar } from "../redux/slices/snackbar";
import { IoCloseOutline } from "react-icons/io5";

const Snackbar = () => {
  const { show, msg, color } = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();

  useEffect(() => {
    if (show) setTimeout(() => dispatch(closeSnackbar()), 6000);
  }, [show]);

  const close = () => dispatch(closeSnackbar());

  let className = "transition-opacity duration-300 max-w-xs font-medium p-2 pl-3 sm:p-3 md:px-4 text-white flex items-center gap-4 rounded-sm ";

  if (show) className += " opacity-100 ";
  if (!show) className += " opacity-0 ";

  switch (color) {
    case "blue":
      className += "bg-blue-500";
      break;
    case "green":
      className += "bg-green-500";
      break;
    case "red":
      className += "bg-red-500";
      break;
    default:
      className += "bg-red-500";
  }

  return (
    <div className="w-full fixed top-12 md:top-16 z-50">
      <div className="box flex justify-center sm:justify-end">
        <div className={className}>
          <span>{msg}</span>
          <IoCloseOutline onClick={close} fontSize={22} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Snackbar;
