import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  return (
     <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
     <div className="relative sm:pb-16 sm:pt-8">
       <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
         <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
           <div className="absolute inset-0">
             <img
               className="h-full w-full object-cover"
               src="/rickGif.gif"
               alt="Page Opener"
             />
             <div className="absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" />
           </div>
           <div className="relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
             <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
               <span className="block uppercase text-yellow-500 drop-shadow-md">
                 Image To Text
               </span>
             </h1>
             <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                   <Link
                     href="/imagehandle"
                     className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                   >
                     Start uploading Image
                   </Link>
             </div>
           </div>
         </div>
       </div>
     </div>
   </main>
  );
}