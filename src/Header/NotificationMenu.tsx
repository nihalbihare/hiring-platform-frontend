import { Indicator, Menu, MenuItem, rem, Stack } from "@mantine/core";
import { IconBell, IconCheck } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Notification } from '@mantine/core';
import { getNotification, readNotification } from "../Services/NotifcationApiService";

const NotificationMenu = () => {
    const [opened, setOpened] = useState(false);
    const user =useSelector((state:any)=>state.user)
      const navigate = useNavigate()
    const [notifications, setNotifications] = useState<any>([])
    
    useEffect (()=>{
        getNotification(user.id).then((res)=>{
            setNotifications(res)
        }).catch((err)=>{
            console.log(err)
        })

    },[user])
    const unread=(index:number)=>{
      let notifi = [...notifications]
     notifi = notifi.filter((notification:any , i:number)=> i!=index)
      setNotifications(notifi)
      readNotification(notifications[index].id).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    }
    

  return (
    <Menu shadow="md" width={400}  opened={opened} onChange={setOpened}>
      <Menu.Target>
     <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
            <Indicator disabled={notifications.length <=0} color="bright-sun.4" offset={6} size={6} radius="lg" processing>
        <IconBell stroke={1.25} />
        </Indicator>
        </div>
      </Menu.Target>

      <Menu.Dropdown onChange={()=>setOpened(true)}>
      {/* <Link to='/profile'>
      <MenuItem> */}
      <div className="flex flex-col gap-1">

   { notifications.map((notification:any, index:number) =><Notification
    className="hover:bg-mine-shaft-900 cursor-pointer"
    onClick={()=>{
      navigate(notification.route)
      setOpened(false)
      unread(index)
    }}
    onClose={()=>unread(index)}  
     icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
      color="teal" title={notification.action} mt="md">
       {notification.message}
      </Notification> )}
      {
        notifications.length == 0 && <div className="text-center text-mine-shaft-300">No Notifications</div>
      }
      </div>
      
    
      {/* </MenuItem>
   
          </Link> */}
        
      </Menu.Dropdown>
    </Menu>
  )
}

export default NotificationMenu
