import { logOut } from "@/actions/authentication";


export default async function ProfileMenu() {


  
  return (
    <ul className="menu lg:menu-horizontal bg-base-200 rounded-box start-0">
      <li>
        <details>
          <summary>Profile</summary>
          <ul>
          <li>
              <details>
                <summary>Settings</summary>
                <ul>
                  <li>
                    <a>item 1</a>
                  </li>
                  <li>
                    <a>item 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Privacy</summary>
                <ul>
                  <li>
                    <a>item 1</a>
                  </li>
                  <li>
                    <a>item 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <form className="w-full content-center whitespace-nowrap" action={logOut}>
              <button type="submit" className="btn btn-ghost w-full bg-origin-padding">Log Out</button>
              </form>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
}
