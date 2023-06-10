import { useRef, useEffect } from "react";
import { StyledModal } from "./modal";

export const Modal = ({ setIsOpen }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleOutclick = (event) => {
            if (!modalRef.current?.contains(event.target)) {
                setIsOpen(false);
            }
        }

        window.addEventListener("mousedown", handleOutclick);

        return () => {
            window.removeEventListener("mousedown", handleOutclick);
        }
    }, [])

    const buttonRef = useRef(null);

    useEffect(() => {
        const handleKeydown = (event) => {
            if (event.key === "Escape") {
                buttonRef.current?.click();
            }
        }

        window.addEventListener("keydown", handleKeydown);

        return () => {
            window.removeEventListener("keydown", handleKeydown);
        }
    }, [])

    return (
        <StyledModal role="dialog">
            <div ref={modalRef}>
                <button
                    ref={buttonRef}
                    onClick={() => setIsOpen(false)}
                >
                    Fechar
                </button>
            </div>
        </StyledModal>
    );
}