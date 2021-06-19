let NUMBER_OF_CHILD = 0;

function addchild(e) {

    let addbtn = document.getElementById('all-children')
    let template = `<div id=chid_${NUMBER_OF_CHILD} class="card" >
      <div class="card-body">
      <div class="d-flex justify-content-end "   onclick="deletechild(this)">
      <div style="cursor: pointer;width:20px" onclick="deletechild(this)"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
              </svg>
              </div>
      </div>

        <div class="form-group">
          <label for="relativename" class="form-label">Name :</label>
          <input type="text" id = "child_name_${NUMBER_OF_CHILD}" placeholder="Akash Khurana" onkeyup="child_name_validation(this)" class="form-control" id="relativename">
        </div>

        <div class="row mb-5">
          <div class="form-group col 6">
            <label for="age" class="form-label"> Age : </label>
            <input type="number" placeholder="14" id = "child_age_${NUMBER_OF_CHILD}"  onkeyup="child_age_validation(this)" class="form-control" id="age">
          </div>

          <div class="form-group col-6 ">
            <label for="gender" class="form-label">Gender :</label>
            <select id="gender" class="form-control" >
              <option selected>Male</option>
              <option>Female</option>
            </select>

          </div>
        </div>
      </div>
    </div>
   `
    let newDiv = document.createElement("DIV");
    newDiv.innerHTML = template;
    newDiv.style.marginBottom = '20px'
    addbtn.insertBefore(newDiv, null)

    NUMBER_OF_CHILD = NUMBER_OF_CHILD + 1;
}

function deletechild(e) {

    e.parentNode.parentNode.parentNode.remove()
}


let is_headcontactno_validated = false;
let is_spousecontactno_validated = false;
let is_headname_validated = false;
let is_spousename_validated = false;
let is_checkindate_validated = false;
let is_checkoutdate_validated = false;
let is_roomnumber_validated = false;





function name_validation(e) {

    let value = e.value;
    if (value.length < 3) {
        makeinvalid(e);
        if (e.id === 'headname') is_headname_validated = false;
        else is_spousename_validated = false;
    }
    else {
        makevalid(e)
        if (e.id === 'headname') is_headname_validated = true;
        else is_spousename_validated = true;
    }
    check_head_submit_button();
    check_spouse_submit_button();
}

function contact_number_validation(e) {
    let value = e.value;
    let phoneno = /^\d{10}$/;
    if (value.match(phoneno)) {
        makevalid(e);
        if (e.id === 'headcontactno') is_headcontactno_validated = true;
        else is_spousecontactno_validated = true;
    }
    else {
        makeinvalid(e);

        if (e.id === 'headcontactno') is_headcontactno_validated = false;
        else is_spousecontactno_validated = false;


    }

    check_head_submit_button();
    check_spouse_submit_button()
}

function room_number_validation(e) {
    let value = e.value;
    let roomno = /^[A-Z]\d{3}$/;
    if (value.match(roomno)) {
        makevalid(e);
        is_roomnumber_validated = true;
    }
    else {
        makeinvalid(e);
        is_roomnumber_validated = false;
    }

    check_head_submit_button();
}

function upload_data() {
    alert('data Saved.....!!')
}

function check_head_submit_button() {

    if (is_roomnumber_validated && is_headcontactno_validated &&
        is_checkindate_validated && is_checkoutdate_validated &&
        is_headname_validated

    ) {

        document.getElementById('head_submit').disabled = false;
    }
    else {
        document.getElementById('head_submit').disabled = true;
    }
}

function checkoutdate_validation(e) {

    makevalid(e)
    is_checkoutdate_validated = true;
    check_head_submit_button();
}

function checkindate_validation(e) {

    makevalid(e)
    is_checkindate_validated = true;
    check_head_submit_button();
}


function address_vaidation(e) {
    makevalid(e)

}

function check_spouse_submit_button() {
    if (is_spousecontactno_validated && is_spousename_validated) {
        document.getElementById('spouse_submit').disabled = false;
    }
    else {
        document.getElementById('spouse_submit').disabled = true;

    }
}


function child_name_validation(e) {

    if (e.value.length < 3) {
        makeinvalid(e);
        return false;
    }
    else {
        makevalid(e);
        return true;
    }
}

function child_age_validation(e) {

    let val = parseInt(e.value, 10);

    if (val > 30 || val < 0) {
        makeinvalid(e);
        return false;
    }
    else {
        makevalid(e);
        return true;
    }

}




function children_validation(e) {

    let is_children_form_validated = true;
    for (let i = 0; i < NUMBER_OF_CHILD; i++) {


        let child_name = document.getElementById(`child_name_${i}`);
        let child_age = document.getElementById(`child_age_${i}`);
        if (child_age && child_name) {

            is_children_form_validated = child_name_validation(child_name) &&
                child_age_validation(child_age) && is_children_form_validated;
        }


    }



    if (is_children_form_validated) {
        upload_data()
    }



}

function makevalid(e) {
    e.classList.remove('is-invalid')
    e.classList.add('is-valid')
}

function makeinvalid(e) {
    e.classList.remove('is-valid')
    e.classList.add('is-invalid')
}