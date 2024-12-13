import { Sidebar } from "@/components/sidebar";

type Props = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: Props) =>{
    return (
        <>
            <div className="bg-customMid min-h-screen">
                <Sidebar className="hidden lg:flex"/>
                    <main className="lg:pl-[256px] h-full lg:pt-0">
                        <div className="max-w-[1056px] mx-auto pt-6 h-full">
                            {children}                
                        </div>
                    </main>   
            </div>
        </>
    );
};

export default MainLayout;