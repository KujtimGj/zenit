import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface AnnouncementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AnnouncementModal = ({ isOpen, onClose }: AnnouncementModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold text-primary">
            🎉 Ofertë Speciale!
          </DialogTitle>
          <DialogDescription className="text-center text-base mt-4">
            Merrni 8% zbritje kur të paguani çmimin e plotë paraprakisht!
            <br />
            <span className="text-primary font-medium mt-2 block">
              Mos humbisni këtë mundësi të shkëlqyer!
            </span>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-6">
          <Button 
            onClick={onClose}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-2 rounded-full"
          >
            Kuptoj
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementModal;
