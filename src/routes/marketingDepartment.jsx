import React from 'react';
import { MDBListGroup, MDBListGroupItem,MDBContainer,MDBBadge } from 'mdb-react-ui-kit';
export default function MarketingDepartment() {
    return (
   
          
         
          <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <h1>Marketing Department</h1>
          <h3>Received Advertising Details</h3>
          <MDBListGroup style={{ minWidth: '22rem' }} light>
      <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <img
            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>John Doe</p>
            <p className='text-muted mb-0'>john.doe@gmail.com</p>
          </div>
        </div>
        <MDBBadge pill light color='success'>
          Active
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <img
            src='https://mdbootstrap.com/img/new/avatars/6.jpg'
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>Alex Ray</p>
            <p className='text-muted mb-0'>alex.ray@gmail.com</p>
          </div>
        </div>
        <MDBBadge pill light color='primary'>
          Onboarding
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <img
            src='https://mdbootstrap.com/img/new/avatars/7.jpg'
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>Kate Hunington</p>
            <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
          </div>
        </div>
        <MDBBadge pill light color='warning'>
          Awaiting
        </MDBBadge>
      </MDBListGroupItem>
    </MDBListGroup>
          <h3>Accepted Advertising Details</h3>
          <MDBListGroup style={{ minWidth: '22rem' }} light>
      <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <img
            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>John Doe</p>
            <p className='text-muted mb-0'>john.doe@gmail.com</p>
          </div>
        </div>
        <MDBBadge pill light color='success'>
          Active
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <img
            src='https://mdbootstrap.com/img/new/avatars/6.jpg'
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>Alex Ray</p>
            <p className='text-muted mb-0'>alex.ray@gmail.com</p>
          </div>
        </div>
        <MDBBadge pill light color='primary'>
          Onboarding
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <img
            src='https://mdbootstrap.com/img/new/avatars/7.jpg'
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>Kate Hunington</p>
            <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
          </div>
        </div>
        <MDBBadge pill light color='warning'>
          Awaiting
        </MDBBadge>
      </MDBListGroupItem>
    </MDBListGroup>
          </MDBContainer>
          
          
         
      
      
    );
  }