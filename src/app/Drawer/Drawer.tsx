

export default function Drawer() {

    return (
        <div className="drawer z-10">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}</div> 
        <div className="drawer-side sm:w-full ">
            
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay">
          </label>

          <ul className="menu sm:flex-1 md:w-1/5 p-4 min-h-full bg-base-200 text-base-content sm:text-nowrap">
            {/* Sidebar content here */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
            
          </ul>
        </div>
      </div>
    );
  }
  