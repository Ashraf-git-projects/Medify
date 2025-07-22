import React from "react";
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import faq from '../assets/faq.png';
import smile from '../assets/smiley.png';
import './faq.css'


export default function Faq(){
    return(
        <div className="faq_container" >
          <p className="faq_para">Get Your Answer</p>
          <h1 className="faq_head">Frequently Asked Questions</h1>
          <div className="faq_flex_part">
            <img className="faq_img" src={faq} alt="faq-image" />
          
            <div className="accordian">
              <Box className="tree_box">
      <SimpleTreeView>
        <TreeItem sx={{paddingTop:5}} className="tree_itm" itemId="grid" label="Why choose our medical for your family?">
          <TreeItem itemId="grid-community" label="Data-1" />
          <TreeItem itemId="grid-pro" label="Data-2" />
          <TreeItem itemId="grid-premium" label="Data-3" />
        </TreeItem>
        <TreeItem sx={{paddingTop:5}} className="tree_itm" itemId="pickers" label="Why we are different from others?">
          <TreeItem itemId="pickers-community"  label="Data-1" />
          <TreeItem itemId="pickers-pro"  label="Data-1"  />
        </TreeItem>
        <TreeItem sx={{paddingTop:5}} className="tree_itm" itemId="charts" label="Trusted & experience senior care & love">
          <TreeItem itemId="charts-community"  label="Data-1" />
        </TreeItem>
        <TreeItem sx={{paddingTop:5}} className="tree_itm" itemId="tree-view" label="How to get appointment for emergency cases?">
          <TreeItem itemId="tree-view-community" label="Data-1"  />
        </TreeItem>
      </SimpleTreeView>
    </Box>
            </div>
            </div>
            <div className="faq_popup">
                <img src={smile} alt="smile" />
                <div className="pop_txts">
                     <h1>84k+</h1>
                <p>Happy Patients</p>
                </div>
            </div>
        </div>
    );
}