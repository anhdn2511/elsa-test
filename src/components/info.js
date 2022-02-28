import { useState } from 'react';
import './info.css';
import './button.css'

export default function Info() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [validationMsg, setValidationMsg] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [msgOption, setMsgOption] = useState('');

    const onChangeName = (event) => {
        const value = event.target.value
        setName(value)
    }

    const onChangePhone = (event) => {
        const value = event.target.value
        setPhone(value)
    }

    const onChangeEmail = (event) => {
        const value = event.target.value
        setEmail(value)
    }

    const onChangeOption = (event) => {
        setSelectedOption(event.target.value)
        if(event.target.value === 'option1') {
            setMsgOption('Gói 1 năm: 989.000 VNĐ')
        }
        else if(event.target.value === 'option2') {
            setMsgOption('Gói trọn đời: 1.995.000 VNĐ')
        }
    }

    const validate = () => {
        const msg = {}
        if(name === '') {
            msg.name = "Xin hãy nhập tên"
        }
        if(phone === '') {
            msg.phone = "Xin hãy nhập số điện thoại"
        }
        else if(!/^[0-9]\w{0,10}$/.test(phone)) {
            msg.phone = 'Số điện thoại không hợp lệ'
        }
        if(email === '') {
            msg.email = "Xin hãy nhập email"
        }
        else if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            msg.email = "Email không hợp lệ"
        }
        if(selectedOption === '') {
            msg.option = "Xin hãy chọn gói"
        } 
        setValidationMsg(msg)
        if (Object.keys(msg).length > 0) return false
        else return true
    }

    const handleSubmit = () => {
        const isValid = validate()
        if(!isValid) return
        else window.alert("Gửi đăng ký thành công")
    }

    return (
        <div class="container">
        <div class="row border" style={{height: 600, width: 550, borderRadius: 20, backgroundColor: 'white'}}>
            <div class ="col-12 col-md-12">
                <div class="row justify-content-center align-items-center    info-first" style={{height:110, borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
                    <div class="col-8 col-md-8">
                        <h3 class="white-text ">CÙNG ỨNG DỤNG ELSA</h3>
                        <h3 class="white-text">NÓI TIẾNG ANH "THẢ GA"</h3>
                    </div>
                </div>
            </div>
            <div class ="col-12 col-md-12">
                <form>
                    <div class="form-group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#06BAE8" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>
                        <label for="inputName" class="form-label text-primary">Họ tên *</label>
                        <input type="text" class="form-control" id="validName" required onChange={onChangeName}></input>
                        <p className='text-danger italic'>{validationMsg.name}</p>
                    </div>
                    <div class="form-group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#06BAE8" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                        <label for="inputPhone" class="form-label text-primary">Số điện thoại *</label>
                        <input type="text" class="form-control" id="validPhone"  required onChange={onChangePhone}></input>
                        <p className='text-danger italic'>{validationMsg.phone}</p>
                    </div>
                    <div class="form-group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#06BAE8" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                        <label for="inputEmail" class="form-label text-primary">Email *</label>
                        <input type="text" class="form-control" id="validEmail"  required onChange={onChangeEmail}></input>
                        <p className='text-danger italic'>{validationMsg.email}</p>
                    </div>
                    <div class="row">
                        <div class="col-4 col-md-4">
                            <div class="row">
                                <div class="col-2 col-md-2">
                                    <input type="radio" name="radioOptions" value="option1" checked={selectedOption === "option1"} onChange={onChangeOption}/>
                                </div>
                                <div class="col-10 col-md-10">
                                    <label for="Radio1">Gói học 1 năm</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-2 col-md-2">
                        </div>
                        <div class="col-4 col-md-4">
                            <div class="row">
                                <div class="col-2 col-md-2">
                                    <input type="radio" name="radioOptions" value="option2" checked={selectedOption === "option2"} onChange={onChangeOption}/>
                                </div>
                                <div class="col-10 col-md-10">
                                    <label for="Radio2">Gói trọn đời</label>
                                </div>
                            </div>      
                        </div>
                        <p className='text-danger italic'>{validationMsg.option}</p>
                        <p className='text-primary italic'>{msgOption}</p>
                    </div>
                    <div class = "row justify-content-center mt-3">
                        <button type="button" class = "btn gradient-button" onClick={handleSubmit}>GỬI ĐĂNG KÝ</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}