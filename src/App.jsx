
import Page1 from './components/Page1'

const App = () => {

  const users=[
    {
      img:'https://images.unsplash.com/photo-1709701576125-1bbe56a37aa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2ZmZXNpb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'lightseagreen',
      tag:'Satisfied'
    },
    {
      img:'https://media.istockphoto.com/id/1409751960/photo/young-businessman-using-digital-tablet-while-working-in-business-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=9GdcMudanWmHyzpTaNvY8VNuhFkNB7dy1-fYL0s5x58= ',
      intro:'',
      color:'royalblue',
      tag:'Underserved'
    },
    {
      img:'https://media.istockphoto.com/id/1277533180/photo/young-indian-businesswoman-using-digital-tablet-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=YIfZ1HmL-LEe2aCKBY_TRmHq_Bhmj4B55VV4hPNopuY= ',
      intro:'',
      color:'pink',
      tag:'Underbanked'
    },
    {
      img:'https://media.istockphoto.com/id/2193065392/photo/young-business-professionals-collaborating-in-a-modern-meeting-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y_bBV3QOniNMQ2WGLu0FwymTEqs_4Yiw6v0mWfFPYiY=',
      intro:'',
      color:'orange',
      tag:'Meeting'
    },
    {
      img:'https://media.istockphoto.com/id/2196870531/photo/making-decision-on-the-move.webp?a=1&b=1&s=612x612&w=0&k=20&c=rzFeaIUuiSoIUr2ihFB2qv26Fl3V3VkIMgygTSBbBo0= ',
      intro:'',
      color:'brown',
      tag:'Friends'

    },
  ];
  return (
    <div>
      <Page1 users={users}/>

    </div>
  )
}

export default App
