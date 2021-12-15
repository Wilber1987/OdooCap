# -*- coding: utf-8 -*-
from odoo import http


class JsModule(http.Controller):
    @http.route('/js_module/js_module', auth='public', website=True)
    def index(self,  **kw):
        ModelO = http.request.env['js_module.js_module']
        return http.request.render('js_module.index', {
            'ModelO': ModelO.search([])
        })

    # @http.route('/js_module/js_module', auth='public')
    # def index(self, **kw):
    #     return "Hello, world"

#     @http.route('/js_module/js_module/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('js_module.listing', {
#             'root': '/js_module/js_module',
#             'objects': http.request.env['js_module.js_module'].search([]),
#         })

    # @http.route('/js_module/index', auth='public')
    # def index(self, obj, **kw):
    #     return http.request.render('js_module.index', {})
