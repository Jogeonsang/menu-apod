import React from "react"
import styles from "./ViewerTemplate.scss"
import classNames from "classNames/bind"

const cx = classNames.bind(styles)

const ViewerTemplate = ({ viewer, menuNavigator }) => {
  return <div className={cx("viwer-template")} />
}

export default ViewerTemplate
