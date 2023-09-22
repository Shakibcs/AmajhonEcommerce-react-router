import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <section className="flex justify-between px-10 shadow-md py-7">
                <div><h1 className="text-xl font-bold">AmaJhon</h1></div>
      <nav className=''>
        <ul className="flex gap-5">
            <li><a href="/home">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </nav>
      </section>

     
     <Outlet></Outlet>
     
        </div>
    );
};

export default MainLayout;