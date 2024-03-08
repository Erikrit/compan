import React from 'react'
import styles from './BreadCrums.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const BreadCrums = (props) => {

    const {product} = props

  return (
    <div className={styles.breadCrums}>
        HOME <FontAwesomeIcon icon={faArrowRight} /> {product.name}
    </div>
  )
}

export default BreadCrums