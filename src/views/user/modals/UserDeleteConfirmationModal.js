import React, { useState } from 'react'
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import { cilDelete } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import UserController from '../../../controller/UserController'
import { useNavigate } from 'react-router-dom'
import cogoToast from 'cogo-toast'
import AuthManagement from '../../../utilities/AuthManagement'

const UserDeleteConfirmationModal = ({ userId }) => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)

  const submitDeleteUser = async () => {
    try {
      const token = await AuthManagement.getToken()
      const userDelete = await UserController.deleteUser(token, userId)
      if (userDelete.success) {
        cogoToast.success(userDelete.message ?? 'User deleted successfully.', { position: 'bottom-left' })
        setVisible(false)
        // navigate('/user')
        window.location.reload()

      } else {
        cogoToast.error('Internal error occurred', { position: 'bottom-left' })
      }
    } catch (error) {
      console.error('Failed to delete user:', error)
      cogoToast.error('Internal error occurred', { position: 'bottom-left' })
    }
  }

  return (
    <>
      <CButton
        color='danger'
        active={true}
        className='me-2 mb-2'
        onClick={() => setVisible(!visible)}
      >
        <CIcon icon={cilDelete} className="me-2" />
        Delete
      </CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Are you sure?</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Are you sure you want to delete this user?
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="danger" onClick={submitDeleteUser}>
            Delete
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default UserDeleteConfirmationModal
