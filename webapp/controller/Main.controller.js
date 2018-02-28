sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("bmt.training.viewmodel.controller.Main", {
		
		onInit: function (){
			//Create View Model and bind it to View
			var oVm = new sap.ui.model.json.JSONModel();
			oVm.setData({
				EditMode: false
			});
			this.getView().setModel(oVm, "VM");
		},
		
		onPressEdit: function(){
			var oVm = this.getView().getModel("VM");
			oVm.setProperty("/EditMode", true);
		},
		
		onPressSave: function(){
			var oVm = this.getView().getModel("VM");
			oVm.setProperty("/EditMode", false);
		}
		
	});
});