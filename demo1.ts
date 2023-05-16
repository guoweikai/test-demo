var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "vab-query-form",
        [
          _c(
            "vab-query-form-left-panel",
            { attrs: { span: 24 } },
            [
              _c(
                "el-form",
                {
                  ref: "form",
                  attrs: { model: _vm.queryForm, inline: true },
                  nativeOn: {
                    submit: function ($event) {
                      $event.preventDefault()
                    },
                  },
                },
                [
                  _c(
                    "el-form-item",
                    [
                      _c("el-button", { attrs: { type: "primary" } }, [
                        _vm._v(_vm._s(_vm.title)),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "el-table",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.listLoading,
              expression: "listLoading",
            },
          ],
          ref: "tableSort",
          staticClass: "base-table",
          attrs: {
            height: _vm.height,
            data: _vm.list,
            "element-loading-text": _vm.elementLoadingText,
          },
          on: { "sort-change": _vm.tableSortChange },
        },
        [
          _c("el-table-column", {
            attrs: { "show-overflow-tooltip": "", label: "序号", width: "60" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function (scope) {
                  return [
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm.queryForm.page_size *
                            (_vm.queryForm.curr_page - 1) +
                            scope.$index +
                            1
                        ) +
                        " "
                    ),
                  ]
                },
              },
            ]),
          }),
          _c("el-table-column", {
            attrs: {
              "show-overflow-tooltip": "",
              prop: "id_task",
              label: "任务编号",
              width: "180",
              sortable: "",
            },
          }),
          _c("el-table-column", {
            attrs: {
              "show-overflow-tooltip": "",
              prop:
                _vm.title == "queued_task" ? "create_timestamp" : "active_task",
              label: "创建时间",
              width: "160",
              sortable: "",
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function (scope) {
                  return [
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm.formatCreateTime(scope.row.create_timestamp)
                        ) +
                        " "
                    ),
                  ]
                },
              },
            ]),
          }),
          _c("el-table-column", {
            attrs: {
              "show-overflow-tooltip": "",
              label: "任务时间（s）",
              prop: "fetch_timestamp",
              width: "120",
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function (ref) {
                  var row = ref.row
                  return [
                    row.fetch_timestamp
                      ? _c("span", [
                          _vm._v(
                            " " +
                              _vm._s(
                                (row.fetch_timestamp / 1000000000).toFixed(2)
                              ) +
                              " "
                          ),
                        ])
                      : _vm._e(),
                  ]
                },
              },
            ]),
          }),
          _c("el-table-column", {
            attrs: {
              "show-overflow-tooltip": "",
              label: "用户ID",
              prop: "user_id",
              width: "180",
              sortable: "",
            },
          }),
          _c("el-table-column", {
            attrs: {
              "show-overflow-tooltip": "",
              label: "APP_ID",
              prop: "app_id",
              width: "180",
              sortable: "",
            },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }