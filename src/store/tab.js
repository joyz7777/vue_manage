

export  default {
    state : {
        isCollapse : false,

    },
    mutations: {
        //修改菜单展开收起的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}