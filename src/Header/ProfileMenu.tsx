import { Menu, Avatar,  } from '@mantine/core';
import { IconUserCircle,   IconLogout2,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { removeUser } from '../Slices/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../Services/ProfileServices';
import { setProfile } from '../Slices/ProfileSlice';
import { removeJwt } from '../Slices/JwtSlice';

const  ProfileMenu =()=> {
  
    const [opened, setOpened] = useState(false);
    const dispatch =useDispatch();
    const user =useSelector((state:any)=>state.user)
    const profile = useSelector((state: any) => state.profile)
          useEffect(() => {
            getProfile(user.id).then((data: any) => {
              dispatch(setProfile(data))
            }).catch((error: any) => {
              console.log(error);
            })
        
        
          }, [])

 const handleLogOut = () => {
  dispatch(removeJwt());            // ✅ Clear JWT from Redux
  localStorage.removeItem("token"); // ✅ Already clears from localStorage
  dispatch(removeUser());           // ✅ Clear user slice
};
  return (
    <Menu shadow="md" width={200}  opened={opened} onChange={setOpened}>
      <Menu.Target>
      <div className='flex items-center xsm-mx:hidden cursor-pointer gap-1.5 '>
            <div>{user.name}</div>
            <Avatar  src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:"/avatar.png"} alt="it's me" />
            </div>
      </Menu.Target>

      <Menu.Dropdown onChange={()=>setOpened(true)}>
      <Link to='/profile'>
        <Menu.Item leftSection={<IconUserCircle size={14} />}>
          Profile
        </Menu.Item>
          </Link>
        {/* <Menu.Item
          leftSection={<IconMoon size={14} />}
          rightSection={
            <Switch  checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)}
      size="md"
      color="dark.4"
      onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
      offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)" />}
    />
          }>
          Dark Mode
        </Menu.Item> */}

        <Menu.Divider />

        <Menu.Item
        onClick={handleLogOut}
          color="red"
          leftSection={<IconLogout2 size={14} />}
        >
       Log Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
export default ProfileMenu