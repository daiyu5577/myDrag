import { Effect, Reducer, Subscription } from 'umi';


export type BtnListItem = {
  type: string,
  disabled: Boolean,
  title: string
}

export interface ToolbarModelState {
  canvasWidth: number;
  canvasHeigth: number;
  btnList: Array<BtnListItem>;
}

export interface ToolbarModelType {
  namespace: 'toolbar';
  state: ToolbarModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    updata: Reducer<ToolbarModelState>;
  };
  subscriptions: { setup: Subscription };
}

const toolbarModel: ToolbarModelType = {
  namespace: 'toolbar',

  state: {
    // 画布宽
    canvasWidth: 2481,
    // 画布高
    canvasHeigth: 3508,
    // 顶部head操作按钮
    btnList: [
      {
        type: '',
        disabled: false,
        title: '预览',
      },
      {
        type: '',
        disabled: false,
        title: '保存',
      },
      {
        type: '',
        disabled: false,
        title: '清除画布',
      },
    ],
  },

  effects: {
    *query({ payload }, { call, put }) {
    },
  },
  reducers: {
    updata(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        // do something
      });
    }
  }
};

export default toolbarModel;
