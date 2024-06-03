// components/ui/dialog.tsx
import { Fragment, ReactNode } from 'react';
import { Dialog as HeadlessDialog, Transition } from "@headlessui/react";

interface DialogProps {
  isOpen: boolean;
  onDismiss: () => void;
  children: ReactNode;
}

export const Dialog = ({ isOpen, onDismiss, children }: DialogProps) => (
  <Transition show={isOpen} as={Fragment}>
    <HeadlessDialog onClose={onDismiss} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        {children}
      </div>
    </HeadlessDialog>
  </Transition>
);

export const DialogOverlay = () => (
  <Transition.Child
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="fixed inset-0 bg-black opacity-50" />
  </Transition.Child>
);

interface DialogContentProps {
  children: ReactNode;
  className?: string;
}

export const DialogContent = ({ children, className }: DialogContentProps) => (
  <Transition.Child
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    enterTo="opacity-100 translate-y-0 sm:scale-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  >
    <div className={`inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${className}`}>
      {children}
    </div>
  </Transition.Child>
);

interface DialogHeaderProps {
  children: ReactNode;
}

export const DialogHeader = ({ children }: DialogHeaderProps) => (
  <div className="sm:flex sm:items-start">
    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
      {children}
    </div>
  </div>
);

interface DialogTitleProps {
  children: ReactNode;
}

export const DialogTitle = ({ children }: DialogTitleProps) => (
  <HeadlessDialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
    {children}
  </HeadlessDialog.Title>
);

interface DialogDescriptionProps {
  children: ReactNode;
}

export const DialogDescription = ({ children }: DialogDescriptionProps) => (
  <div className="mt-2">
    <p className="text-sm text-gray-500">
      {children}
    </p>
  </div>
);

interface DialogCloseProps {
  onClick: () => void;
}

export const DialogClose = ({ onClick }: DialogCloseProps) => (
  <div className="mt-5 sm:mt-4 sm:ml-10 sm:pl-4 sm:flex">
    <button
      type="button"
      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
      onClick={onClick}
    >
      Fechar
    </button>
  </div>
);
