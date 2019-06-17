// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import Loading from './Loading';
// import {RoomConsumer} from '../../Context';


// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {value => {
//                 const { loading, sortedRooms, rooms } = value;
//                 if (loading) {
//                     return <Loading />
//                 }
//                 return (
//                     <div>
//                         <RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortedRooms} />
//                     </div>
//                 )
//             }}
//         </RoomConsumer>
        
//     )
// }

//anthor way to do that with higher order function
import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from './Loading';
import withRoomConsumer from '../Context';


function RoomsContainer({context}) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />
        }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomsContainer);