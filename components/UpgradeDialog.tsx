"use-client"


import { useAuth } from '@clerk/nextjs';
import React, { createContext, ReactNode, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';


type UpgradeReason = {title:string; description?: string};

const DEFAULT_REASON: UpgradeReason = {
    title: "Upgrade your plan",
    description: "Get more agent prompts, unlimited workspaces, share links and PDF exports.",
};

const UpgradeDialogContext = createContext<(reason?: UpgradeReason) => void>(
    () => {}
)


const UpgradeDialogProvider = ({children} : {children: ReactNode}) => {

    const [reason, setReason] = useState<UpgradeReason | null >(null);
    const {orgId} = useAuth();
    const close = () => setReason(null);



  return (
    
      <UpgradeDialogContext.Provider value={(next) => setReason(next ?? DEFAULT_REASON)}>
        {children}

        <Dialog>
         <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                       This action cannot be undone. This will permanently delete your account
                      and remove your data from our servers.
                  </DialogDescription>
             </DialogHeader>
         </DialogContent>
        </Dialog>

      </UpgradeDialogContext.Provider>
    
  
  )
}

export default UpgradeDialogProvider;
