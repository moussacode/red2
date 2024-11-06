import { NavBar } from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export default function DashboardLayout({ children }) {
    return (
        
        <section>
            <div style={{
                display: 'flex',
                minHeight: '100vh'
            }}>
                <SideBar />
                <main style={{
                    marginLeft: '250px',
                    flex: 1,
                    backgroundColor:"#F0F0F0"
                    
                }}>
                 
                    {children}
                </main>
            </div>
        </section>
    );
}