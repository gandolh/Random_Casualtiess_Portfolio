import config from "@/config";
import { Button, Modal } from "flowbite-react";
type AnimationModalProps = {
    animation : AnimationPath;
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
};

const AnimationModal = ({animation, openModal, setOpenModal} : AnimationModalProps) => {
    const prefix = `${window.location.origin}${config.basePath}GenerativeArt/`;

    const getAnimUrl = (path: string) => {
     return prefix + path.replace("\\","/") + "/index.html";
    }
    return (
    <Modal show={openModal} onClose={() => setOpenModal(false)} size="7xl" >
        <Modal.Header>{animation.name}</Modal.Header>
        <Modal.Body >
            <div className="space-y-6" style={{height: "60vh"}}>
                <iframe src={getAnimUrl(animation.path)} width="100%" height="100%"></iframe> 
            </div>
        </Modal.Body>
        <Modal.Footer>
            <div className="flex justify-end space-x-4 w-full">
            <Button onClick={() => setOpenModal(false)}  color="failure" outline size="md">Close</Button>
            <Button onClick={() => setOpenModal(false)} size="md">Go full page</Button>
            </div>
        </Modal.Footer>
    </Modal>
    );
}

export default AnimationModal;