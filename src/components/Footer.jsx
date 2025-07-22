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
            <TreeItem
              sx={{}}
              className="footer_tree_itm"
              itemId="grid"
              label="Why choose our medical for your family?"
            >
              <TreeItem itemId="grid-community" label="Data-1" />
              <TreeItem itemId="grid-pro" label="Data-2" />
              <TreeItem itemId="grid-premium" label="Data-3" />
            </TreeItem>
            <TreeItem
              sx={{ }}
              className="footer_tree_itm"
              itemId="pickers"
              label="Why we are different from others?"
            >
              <TreeItem itemId="pickers-community" label="Data-1" />
              <TreeItem itemId="pickers-pro" label="Data-1" />
            </TreeItem>
            <TreeItem
              sx={{}}
              className="footer_tree_itm"
              itemId="charts"
              label="Trusted & experience senior care & love"
            >
              <TreeItem itemId="charts-community" label="Data-1" />
            </TreeItem>
            <TreeItem
              sx={{}}
              className="footer_tree_itm"
              itemId="tree-view"
              label="How to get appointment for emergency cases?"
            >
              <TreeItem itemId="tree-view-community" label="Data-1" />
            </TreeItem>
          </SimpleTreeView>
        </Box>
      </div>
      <div className="footer_treetwo">
        <Box className="footer_tree_box">
          <SimpleTreeView>
            <TreeItem
              sx={{}}
              className="footer_tree_itm"
              itemId="grid"
              label="Why choose our medical for your family?"
            >
              <TreeItem itemId="grid-community" label="Data-1" />
              <TreeItem itemId="grid-pro" label="Data-2" />
              <TreeItem itemId="grid-premium" label="Data-3" />
            </TreeItem>
            <TreeItem
              sx={{}}
              className="footer_tree_itm"
              itemId="pickers"
              label="Why we are different from others?"
            >
              <TreeItem itemId="pickers-community" label="Data-1" />
              <TreeItem itemId="pickers-pro" label="Data-1" />
            </TreeItem>
            <TreeItem
              sx={{}}
              className="footer_tree_itm"
              itemId="charts"
              label="Trusted & experience senior care & love"
            >
              <TreeItem itemId="charts-community" label="Data-1" />
            </TreeItem>
            <TreeItem
              sx={{}}
              className="footer_tree_itm"
              itemId="tree-view"
              label="How to get appointment for emergency cases?"
            >
              <TreeItem itemId="tree-view-community" label="Data-1" />
            </TreeItem>
          </SimpleTreeView>
        </Box>
      </div>
      <div className="footer_treethree">
        <Box className="footer_tree_box">
          <SimpleTreeView>
            <TreeItem
              sx={{}}
              className="footer_tree_itm"
              itemId="grid"
              label="Why choose our medical for your family?"
            >
              <TreeItem itemId="grid-community" label="Data-1" />
              <TreeItem itemId="grid-pro" label="Data-2" />
              <TreeItem itemId="grid-premium" label="Data-3" />
            </TreeItem>
            <TreeItem
              sx={{ }}
              className="footer_tree_itm"
              itemId="pickers"
              label="Why we are different from others?"
            >
              <TreeItem itemId="pickers-community" label="Data-1" />
              <TreeItem itemId="pickers-pro" label="Data-1" />
            </TreeItem>
            <TreeItem
              sx={{}}
              className="footer_tree_itm"
              itemId="charts"
              label="Trusted & experience senior care & love"
            >
              <TreeItem itemId="charts-community" label="Data-1" />
            </TreeItem>
            <TreeItem
              sx={{}}
              className="footer_tree_itm"
              itemId="tree-view"
              label="How to get appointment for emergency cases?"
            >
              <TreeItem itemId="tree-view-community" label="Data-1" />
            </TreeItem>
          </SimpleTreeView>
        </Box>
      </div>  </div>
      <div className="footer_para">
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
            </p>
      </div>
    </div>
  );
}
