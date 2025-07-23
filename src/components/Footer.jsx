import React from "react";
import logo from "../assets/Group 7.png";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer_container">
        <div className="footer_flex" >
      <div className="footer_logo">
        <img src={logo} alt="medifyLogo" />
        <div className="footer_icons">
          <FaFacebook />
          <FaSquareXTwitter />
          <FaYoutube />
          <FaPinterest />
        </div>
      </div>
      <div className="footer_treeone">
  <Box className="footer_tree_box">
    <SimpleTreeView>
      <TreeItem className="footer_tree_itm" itemId="grid-1" label="About Us">
        <TreeItem itemId="grid-community-1" label="Data-1" />
        <TreeItem itemId="grid-pro-1" label="Data-2" />
        <TreeItem itemId="grid-premium-1" label="Data-3" />
      </TreeItem>
      <TreeItem className="footer_tree_itm" itemId="pickers-1" label="Our Pricing">
        <TreeItem itemId="pickers-community-1" label="Data-1" />
        <TreeItem itemId="pickers-pro-1" label="Data-1" />
      </TreeItem>
      <TreeItem className="footer_tree_itm" itemId="charts-1" label="Our Gallery">
        <TreeItem itemId="charts-community-1" label="Data-1" />
      </TreeItem>
      <TreeItem className="footer_tree_itm" itemId="tree-view-1" label="Appointment">
        <TreeItem itemId="tree-view-community-1" label="Data-1" />
      </TreeItem>
      <TreeItem className="footer_tree_itm" itemId="view-1" label="Privacy Policy">
        <TreeItem itemId="view-community-1" label="Data-1" />
      </TreeItem>
    </SimpleTreeView>
  </Box>
</div>

<div className="footer_treetwo">
  <Box className="footer_tree_box">
    <SimpleTreeView>
      <TreeItem className="footer_tree_itm" itemId="grid-2" label="Orthology">
        <TreeItem itemId="grid-community-2" label="Data-1" />
        <TreeItem itemId="grid-pro-2" label="Data-2" />
        <TreeItem itemId="grid-premium-2" label="Data-3" />
      </TreeItem>
      <TreeItem className="footer_tree_itm" itemId="pickers-2" label="Neurology">
        <TreeItem itemId="pickers-community-2" label="Data-1" />
        <TreeItem itemId="pickers-pro-2" label="Data-1" />
      </TreeItem>
      <TreeItem className="footer_tree_itm" itemId="charts-2" label="Dental Care">
        <TreeItem itemId="charts-community-2" label="Data-1" />
      </TreeItem>
      <TreeItem className="footer_tree_itm" itemId="tree-view-2" label="Opthalmology">
        <TreeItem itemId="tree-view-community-2" label="Data-1" />
      </TreeItem>
      <TreeItem className="footer_tree_itm" itemId="ree-view-2" label="Cardiology">
        <TreeItem itemId="tity-2" label="Data-1" />
      </TreeItem>
    </SimpleTreeView>
  </Box>
</div>

<div className="footer_treethree">
  <Box className="footer_tree_box">
    <SimpleTreeView>
      <TreeItem className="footer_tree_itm" itemId="grd-3" label="About Us">
        <TreeItem itemId="rid-community-3" label="Data-1" />
        <TreeItem itemId="rid-pro-3" label="Data-2" />
        <TreeItem itemId="rid-premium-3" label="Data-3" />
      </TreeItem>
      <TreeItem className="footer_tree_itm" itemId="icers-3" label="Our Pricing">
        <TreeItem itemId="pics-community-3" label="Data-1" />
        <TreeItem itemId="prs-pro-3" label="Data-1" />
      </TreeItem>
      <TreeItem className="footer_tree_itm" itemId="carts-3" label="Our Gallery">
        <TreeItem itemId="chascommunity-3" label="Data-1" />
      </TreeItem>
      <TreeItem className="footer_tree_itm" itemId="treeiew-3" label="Appointment">
        <TreeItem itemId="viemmunity-3" label="Data-1" />
      </TreeItem>
      <TreeItem className="footer_tree_itm" itemId="iew-3" label="Privacy Policy">
        <TreeItem itemId="unity-3" label="Data-1" />
      </TreeItem>
    </SimpleTreeView>
  </Box>
</div>
 </div>
      <hr style={{ width: 1300 ,border: 'none', opacity:0.2 , borderTop: '2px solid #ccc', margin: '16px 0' }} />
      <div className="footer_para">
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
            </p>
      </div>
    </div>
  );
}
