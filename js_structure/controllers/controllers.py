# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request
import json


class JsStructure(http.Controller):
     #@http.route('/js_structure/api/', auth='public')
     @http.route('/js_structure/api/',type='json', auth="public", methods=['POST'],cors="*", csrf=False)
     def objects(self, **kw):
        JModule = []
        js_module = http.request.env['js_module.js_module'].search([])         
        for Module in js_module:
            JModule.append({ 
                "Id": Module['id'],
                "Name": Module['name'],
                "Value 1": Module['value'],
                "Value 2": Module['value2'],
                "Description": Module['description']
            })     
        return {"Data": JModule, "self": request.jsonrequest }   
     @http.route('/js_structure/api/save',type='json', auth="public", methods=['POST'],cors="*", csrf=False)
     def save(self, **kw):
        #code
        http.request.env['js_module.js_module'].create(request.jsonrequest)
        # http.request.env['js_module.js_module'].create({ 
        #         "name": request.jsonrequest['name'],
        #         "value": request.jsonrequest['value'],
        #         "value2": request.jsonrequest['value2'],
        #         "description": request.jsonrequest['description']
        #     })
        return {"success": True, "self": request.jsonrequest, "Data": {}}
     @http.route('/js_structure/api/update',type='json', auth="public", methods=['POST'],cors="*", csrf=False)
     def update(self, **kw):
        #code
        ObjModel = http.request.env['js_module.js_module'].search([("id","=",request.jsonrequest["id"])],limit = 1)
        ObjModel.update({ 
                "name": request.jsonrequest['name'],
                "value": request.jsonrequest['value'],
                "value2": request.jsonrequest['value2'],
                "description": request.jsonrequest['description']
            })
        return {"success": True, "self": request.jsonrequest, "Data": {}}
