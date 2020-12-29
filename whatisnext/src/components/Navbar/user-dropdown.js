
const UserDropdown = ({ click }) => {

    return (
        <div>

            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href=" " id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={localStorage.getItem('profile_img')} width="40" height="40" class="rounded-circle" alt='logo' />
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href={`/profile/${localStorage.getItem('user_id')}`}>Profile</a>
                        <a class="dropdown-item" href="/settings">Settings</a>
                        <a class="dropdown-item" href="/" onClick={click}>Log Out</a>
                    </div>
                </li>
            </ul>

        </div>

    )
}

export default UserDropdown;