import substring from './tools/substring';
import Avatar from '@mui/material/Avatar';
 
 
 const MiniAvatar = ({type}) =>{
    const color = stringToHslColor(substring(type,0,2).toUpperCase(),60,50)

  return (
    <Avatar sx={{borderRadius: 'unset', backgroundColor: color}}>
        {substring(type,0,2).toUpperCase()}
        </Avatar>
  )
}

const stringToHslColor = (str, s, l) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let h = hash % 360;
    return 'hsl('+h+', '+s+'%, '+l+'%)';
  }

export default MiniAvatar