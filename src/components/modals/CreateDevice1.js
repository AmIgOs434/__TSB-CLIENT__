import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {createDevice, createSize_Color, fetchColors, fetchTypes, fetch_One_Color, getOneSize} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import $ from 'jquery'
import set_message from '../../pages/set_message';
const CreateDevice = observer(({show,onHide})=>{

  const [XS, setXS] = useState('XS')
  const [S, setS] = useState('S')
  const [M, setM] = useState('M')
  const [L, setL] = useState('L')
  const [XL, setXL] = useState('XL')
  const [XXL, setXXL] = useState('XXL')
  const [state, setstate] = useState(false)







  const {device} = useContext(Context)
  const [device1 ,setDevice] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState()

  const [im, setIm] = useState('')
  const [info,setInfo] =useState([])
  const [siz,setSiz] =useState([])
  const [color,setColor] =useState([])
  const [get_color,get_Color] =useState([])
  const [response,setResponse] = useState([])
  const [description1,setdescription1] = useState()

     
  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchColors().then(data => device.setColors(data))
}, [])

  const addInfo = () =>{
    setInfo([...info,{title:'',description:'',number:Date.now()}])
  }

  const removeInfo = (number) =>{
    setInfo(info.filter(i=> i.number !== number))
  }
  


  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}





const addColor = () =>{
  setColor([...color,{color:'#000000',quantity:'',img1:'',img2:'',img3:'',img4:'',img5:'',img6:'',img7:'',img8:'',img9:'',img10:'',number2:Date.now()}])
}
const removeColor = (number2 ) =>{
  
  setColor(color.filter(q=> q.number2 !== number2))
}

const deleteColor = () =>{
  setColor([])
}

const changeColor = (key, value, number2) => {
  setColor(color.map(q => q.number2 === number2? {...q, [key]: value} : q))
}

const clear = async () => {
  onHide()
window.location.reload()

}



const addDevice = async () => {
  const formData = new FormData()
  formData.append('name', name)
  formData.append('price', `${price}`)


  formData.append('description', description1) 
  formData.append('typeId', device.selectedType.id)
  formData.append('info', JSON.stringify(info))
  
  // .then(data => onHide())
  const dff= await createDevice(formData)

  setDevice(dff)
}

const add_Size_Color = async (siz,deviceId,color) => {
  const formData1 = new FormData()

  formData1.append('size', siz)
  formData1.append('deviceId', deviceId) 
  formData1.append('color', JSON.stringify(color))
  
  // .then(data => onHide())
  const dff= await createSize_Color(formData1)

}
 



const Get_or_Create_Size = async(siz) => {
    
  try {
    if(!name){

     return set_message('Введите название товара','error')
    }
    if(!price){
      return  set_message('Введите цену товара','error')
    }

    if(device.selectedType.id===undefined){
      return  set_message('Выберите категорию товара','error')
    }
    


    var col_ = $('.col_')
    var s = $(`.${siz}`)
    setSiz(siz)
    var color1 = $('.color1')
    var col__ = $('.col__')


    const get = async() => {
      
      
      if(device1===null){
        addDevice()
      }
      const response = await getOneSize(siz,device1.id) 
      setResponse(response)
      if(response.data===null){
        // add_Size_Color(siz,device1.id,color)
    

      }else{
        const response_1 = await fetch_One_Color(response.data.id) 
        get_Color(response_1)

      }

      return response.data}




   
    $(".size_select").removeClass("size_select");
    s.addClass('size_select')
    col_.removeClass('display_on')
   
    col__.addClass('display_on')
    get()
 
    get_Color([])
    deleteColor([])
    setstate(false)
    
  
 } catch (err) {
   console.error(err.toJSON())
 }
   }

   const create_color = async(siz,deviceId,color) =>{
    deleteColor([])



    add_Size_Color(siz,deviceId,color)
    let response = await getOneSize(siz,device1.id) 

    sleep(1000)
    setResponse(response)
if(response.data){
  const response_1 = await fetch_One_Color(response.data.id)  
  get_Color(response_1)

}
   
    
    
    
    
  }
  return (
    <div class='admin'>
<Modal class='admin'
      show = {show}
      onHide = {onHide}
      centered
    >
      <Modal.Header  class='admin'>
       
        <Modal.Title id="contained-modal-title-vcenter" class='admin1'>
          Добавить новую шмотку
        </Modal.Title>

      </Modal.Header>
      

      <Modal.Body class='admin'>
        <Form >

                    <Dropdown className=" mb-2">
                        <Dropdown.Toggle>{device.selectedType.name || "Выберите категорию"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>





            <Form.Control
                
                value={name}
                onChange={e => setName(e.target.value)}
                className='mt-3 '
                placeholder='Введите название вещи'
            />
            <Form.Control
                value={price}
                onChange={e => setPrice(Number(e.target.value))}
                className='mt-3'
                placeholder='Введите стоимость '
                type='number'
            />
                       <Form.Control
                value={description1}
                onChange={e => setdescription1(e.target.value)}
                className='mt-3'
                placeholder='Введите описание'
                type='text'
            />

            <hr/>
            <Button
            className='mt-3 mb-20'
            style={{color:"#FFF", border:'1px solid'}}
            variant={"outline dark"}
            onClick ={addInfo}
            >
                Добавить новое свойство
            </Button>
            
            {info.map(i=>
                          <Row className="mt-4" key={i.number} >
                          <Col md={4} >
                              <Form.Control
                                  value={i.title}
                                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                  placeholder="Введите название свойства"
                              />
                          </Col>
                          <Col md={4}>
                              <Form.Control
                                  value={i.description}
                                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                  placeholder="Введите описание свойства"
                              />
                          </Col>
                          
                          <Col md={4}>
                              <Button
                                  class='mt-32'
                                  onClick={() => removeInfo(i.number)}
                                  variant={"outline-danger"}
                              >
                                  Удалить
                              </Button>
                          </Col>
                      </Row>
            )}
<div class='color color1__ mb-20 '> Выберите размер:</div>
<div class=' row  overflow-hidden'>  
<div class='row2'>
<div  class='color1 color1_ focus XS'onClick ={()=> Get_or_Create_Size(XS)} ><span>{XS}</span></div>
<div  class='color1 color1_  focus S' onClick ={()=> Get_or_Create_Size(S)} ><span>{S}</span></div>
<div  class='color1 color1_  focus M' onClick ={()=> Get_or_Create_Size(M)} ><span>{M}</span></div>
<div  class='color1 color1_ focus L' onClick ={()=> Get_or_Create_Size(L)} ><span>{L}</span></div>
<div  class='color1 color1_ focus XL' onClick ={()=> Get_or_Create_Size(XL)} ><span>{XL}</span></div>
<div  class='color1 color1_ focus XXL' onClick ={()=> Get_or_Create_Size(XXL)} ><span>{XXL}</span></div>
</div>

        <Button
            className='mt-3 col__ mb-20'
            style={{color:"#FFF" ,border:'1px solid'}}
            variant={"outline dark"}
            onClick= { addColor}
       
            >
                Добавить цвет
            </Button>
            {color.map(q=>
            <div key={q.number2}> 
         <Row className="mt-4 col_ flex_4 mb-20" >
                          <Col md={2} clas=''>
                          <input type="color" class="form-control form-control_2 form-control-color" id="exampleColorInput"  title="Выбери цвет вещи"
                                  value={q.color}
                                  onChange={(e) => changeColor('color', e.target.value, q.number2)}
                            
                          >
                          </input>
                          </Col>
                          <Col md={3}>
                              <Form.Control
                                  class='form-control_2'
                                  type="number"
                                  value={q.quantity}
                                  onChange={(e) => changeColor('quantity', e.target.value, q.number2)}
                                  placeholder="Выбери количество"
                                  title="Выбери количество"
                              />
                          </Col>
                          <Col md={4}>
                              <Button
                                  onClick={() => removeColor(q.number2)}
                                  variant={"outline-danger"}
                              >
                                  Удалить
                              </Button>
                          </Col>
                          
                      </Row>
                      <Row>
                      <Col md={2} mt={40} className='mt-40'>
                              IMG_1
                      </Col>
                      <Col md={10}>
                              <Form.Control
                                  class='form-control_2'
                                  type="text"
                                  value={q.img1}
                                  onChange={(e) => changeColor('img1', e.target.value, q.number2)}
                                  placeholder="Выбери количество"
                                  title="Выбери количество"
                              />
                      </Col>
                      </Row>
                      <Row>
                      <Col md={2} className='mt-40'>
                              IMG_2
                      </Col>
                      <Col md={10}>
                              <Form.Control
                                  class='form-control_2'
                                  type="text"
                                  value={q.img2}
                                  onChange={(e) => changeColor('img2', e.target.value, q.number2)}
                                  placeholder="Выбери количество"
                                  title="Выбери количество"
                              />
                      </Col>
                      </Row>
                      <Row>
                      <Col md={2} className='mt-40'>
                              IMG_3
                      </Col>
                      <Col md={10}>
                              <Form.Control
                                  class='form-control_2'
                                  type="text"
                                  value={q.img3}
                                  onChange={(e) => changeColor('img3', e.target.value, q.number2)}
                                  placeholder="Выбери количество"
                                  title="Выбери количество"
                              />
                      </Col>
                      </Row>
                      <Row>
                      <Col md={2} className='mt-40'>
                              IMG_4
                      </Col>
                      <Col md={10}     class='form-control_2'>
                              <Form.Control
                                  type="text"
                                  value={q.img4}
                                  onChange={(e) => changeColor('img4', e.target.value, q.number2)}
                                  placeholder="Выбери количество"
                                  title="Выбери количество"
                              />
                      </Col>
                      </Row>
                      <Row>
                      <Col md={2} className='mt-40'>
                              IMG_5
                      </Col>
                      <Col md={10}>
                              <Form.Control
                                  type="text"
                                  value={q.img5}
                                  onChange={(e) => changeColor('img5', e.target.value, q.number2)}
                                  placeholder="Выбери количество"
                                  title="Выбери количество"
                              />
                      </Col>
                      </Row>
                      <Row>
                      <Col md={2} className='mt-40'>
                              IMG_6
                      </Col>
                      <Col md={10}>
                              <Form.Control
                                  type="text"
                                  value={q.img6}
                                  onChange={(e) => changeColor('img6', e.target.value, q.number2)}
                                  placeholder="Выбери количество"
                                  title="Выбери количество"
                              />
                      </Col>
                      </Row>
                      <Row>
                      <Col md={2} mt={40} className='mt-40'>
                              Дополни образ
                      </Col>
                      <Col md={10}>
                              <Form.Control
                                  class='form-control_2'
                                  type="text"
                                  value={q.img7}
                                  onChange={(e) => changeColor('img7', e.target.value, q.number2)}
                                  placeholder="Выбери количество"
                                  title="Выбери количество"
                              />
                      </Col>
                      </Row>
                      <Row>
                      <Col md={2} mt={40} className='mt-40'>
                      Дополни образ
                      </Col>
                      <Col md={10}>
                              <Form.Control
                                  class='form-control_2'
                                  type="text"
                                  value={q.img8}
                                  onChange={(e) => changeColor('img8', e.target.value, q.number2)}
                                  placeholder="Выбери количество"
                                  title="Выбери количество"
                              />
                      </Col>
                      </Row>
                      <Row>
                      <Col md={2} mt={40} className='mt-40'>
                      Дополни образ
                      </Col>
                      <Col md={10}>
                              <Form.Control
                                  class='form-control_2'
                                  type="text"
                                  value={q.img9}
                                  onChange={(e) => changeColor('img9', e.target.value, q.number2)}
                                  placeholder="Выбери количество"
                                  title="Выбери количество"
                              />
                      </Col>
                      </Row>
                      <Row>
                      <Col md={2} mt={40} className='mt-40'>
                      Дополни образ
                      </Col>
                      <Col md={10}>
                              <Form.Control
                                  class='form-control_2'
                                  type="text"
                                  value={q.img10}
                                  onChange={(e) => changeColor('img10', e.target.value, q.number2)}
                                  placeholder="Выбери количество"
                                  title="Выбери количество"
                              />
                      </Col>
                      </Row>
                      </div>
                     )} 
<div class='row  mb-20 flex_4'>
                  {get_color?.data?.map(get_color=>
<div key={get_color.id}class='color5 choose' style={{backgroundColor:`${get_color.color}`}}> </div>     
                  )}
                  </div>

            

          
                     <Button
            className='mt-3 col__ mb-20'
            style={{color:"#FFF" ,border:'1px solid'}}
            variant={"outline dark"}
            onClick={()=>create_color(siz,device1.id,color)}
       
            >
                Сохранить
            </Button>
               
</div>



            

            



            
                  
 

           
            
        </Form>
      </Modal.Body>
      

      <Modal.Footer class='admin'>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={clear}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    
    </div>
  )
})

export default CreateDevice






