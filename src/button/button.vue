<template>
  <button
    class="button"
    :class="[
      type ? 'button-' + type : '',
      size ? 'size-' + size : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled || loading,
        'is-loading': loading
      },
    ]"
     :disabled="disabled"
  >
    <i class="sky-icon-refresh" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
export default {
  name: 'sky-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0 5px;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    &:not(.is-disabled) {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
}
.button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    &:not(.is-disabled) {
      background: #66b1ff;
      background-color: #66b1ff;
      color: #fff;
    }
  }
}
.button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    &:not(.is-disabled) {
      background: #85ce61;
      background-color: #85ce61;
      color: #fff;
    }
  }
}
.button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    &:not(.is-disabled) {
      background: #a6a9ad;
      background-color: #a6a9ad;
      color: #fff;
    }
  }
}
.button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    &:not(.is-disabled) {
      background: #ebb563;
      background-color: #ebb563;
      color: #fff;
    }
  }
}
.button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    &:not(.is-disabled) {
      background: #f78989;
      background-color: #f78989;
      color: #fff;
    }
  }
}
//plain
.button.is-plain {
  &:hover,
  &:focus {
    &:not(.is-disabled) {
      background: #fff;
      border-color: #489eff;
      color: #409eff;
    }
  }
}
.button-primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    &:not(.is-disabled) {
      background: #409eff;
      border-color: #409eff;
      color: #fff;
    }
  }
}
.button-success.is-plain {
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    &:not(.is-disabled) {
      background: #67c23a;
      border-color: #67c23a;
      color: #fff;
    }
  }
}
.button-info.is-plain {
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    &:not(.is-disabled) {
      background: #909399;
      border-color: #909399;
      color: #fff;
    }
  }
}
.button-warning.is-plain {
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    &:not(.is-disabled) {
      background: #e6a23c;
      border-color: #e6a23c;
      color: #fff;
    }
  }
}
.button-danger.is-plain {
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    &:not(.is-disabled) {
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
  }
}
// round
.button.is-round {
  border-radius: 20px;
}
// circle
.button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// icon
.button [class*='sky-icon-'] + span {
  margin-left: 5px;
}
// disabled
.button.is-disabled {
  cursor: no-drop;
  opacity: 0.5;
}
// text
.button-text {
  border: none;
  background-color: transparent;
  &:hover,
  &:focus {
    &:not(.is-disabled) {
      background-color: transparent;
    }
  }
}
.size-medium {
  font-weight: 500;
  padding: 10px 18px;
  font-size: 13px;
  border-radius: 3px;
}
.size-small {
  font-weight: 500;
  padding: 8px 16px;
  font-size: 12px;
  border-radius: 2px;
}
.size-mini {
  font-weight: 500;
  padding: 6px 14px;
  font-size: 11px;
  border-radius: 1px;
}
</style>
