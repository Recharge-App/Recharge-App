import GroupHangout from '../../assets/images/group_hangout.svg';
import Connection from '../../assets/images/connection.svg';
import Winners from '../../assets/images/winners.svg';
import { ScreenHeight, ScreenWidth } from '../Components/Dimensions';


export default [

{
    id: '1',
    title: "Recharge your life",
    description: 'All events at your university in one place, instantly searchable.',
    image: <Winners height={ScreenHeight * .55} width={ScreenWidth} viewBox={`${ScreenWidth * .1} ${ScreenHeight * .25} ${ScreenHeight * 1.7} ${ScreenWidth * 1.6}`} />,
},
{
    id: '2',
    title: 'Stay connected',
    description: 'Learn about upcoming events, or create one yourself!',
    image: <Connection height={ScreenHeight * .55} width={ScreenWidth} viewBox={`${ScreenWidth * -.1} ${ScreenHeight * .075} ${ScreenHeight * 1.5} ${ScreenWidth * 1.5}`} />,
},
{
    id: '3',
    title: 'Getting started',
    description: 'Create your account, optionally create an organization, and share events!',
    image: <GroupHangout height={ScreenHeight * .55} width={ScreenWidth} viewBox={`${ScreenWidth * -.1} ${ScreenHeight * .2} ${ScreenHeight * 1.5} ${ScreenWidth * 1.5}`} />,
},
];
