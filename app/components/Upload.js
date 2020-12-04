import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import firebase from "firebase";
import Account from '../components/Account';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Panel from "react-bootstrap/lib/Panel";
import { Button, Panel} from "react-bootstrap";


class Upload extends Component {
	render() {
		return (
			<div class="container">
			  <div class="panel panel-default">
			    <div class="panel-heading">体調入力</div>
			    <div class="panel-body">
			      <form class="form-horizontal">
			        <div class="form-group">
			          <label class="col-sm-2 control-label">体温</label>
			          <div class="col-sm-10">
			            <select class="form-control">
			              <option>   </option>
			              <option>~36.0</option>
			              <option>36.0~36.5</option>
			              <option>36.5~37.0</option>
			              <option>37.0~37.5</option>
			              <option>37.5~</option>
			            </select>
			          </div>
							</div>
			        <div class="form-group">
			          <label class="col-sm-2 control-label">項目2</label>
			          <div class="col-sm-10 radio">
			            <label><input type="radio" name="radio"/>選択肢1</label>
			            <label><input type="radio" name="radio"/>選択肢2</label>
			            <label><input type="radio" name="radio"/>選択肢3</label>
			          </div>
			        </div>
			        <div class="form-group">
			          <label class="col-sm-2 control-label">項目3</label>
			          <div class="col-sm-10 checkbox">
			            <label><input type="checkbox" name="checkbox"/>選択肢1</label>
			            <label><input type="checkbox" name="checkbox"/>選択肢2</label>
			            <label><input type="checkbox" name="checkbox"/>選択肢3</label>
			          </div>
			        </div>
			        <div class="form-group">
			          <label class="col-sm-2 control-label">項目4</label>
			          <div class="col-sm-10">
			            <select class="form-control">
			              <option>選択肢1</option>
			              <option>選択肢2</option>
			              <option>選択肢3</option>
			              <option>選択肢4</option>
			              <option>選択肢5</option>
			            </select>
			          </div>
			        </div>
			        <div class="form-group">
			          <div class="col-sm-offset-2 col-sm-10">
			            <button class="btn btn-default">送信</button>
			          </div>
			        </div>
			      </form>
			    </div>
			  </div>
			</div>
		)
	}
}
export default Upload;
