<template>  
    <view class="container">
		<!-- <button class="cu-btn bg-green shadow" @tap="LoadModal">
			点我
		</button> -->
      <view class="user-section">
		<image class="bg" src="/static/user-bg.jpg"></image>
		<view class="user-info-box">
			<view class="portrait-box">
				<image class="portrait" src="/static/missing-face.png"></image>
			</view>
			<view class="info-box">
				<text class="username">淋雨人</text>
			</view>
		</view>
      </view>
       <view class="history-section icon">
			<list-cell icon="icon-iconfontweixin" iconColor="#e07472" title="我要充值0元" tips="您的会员还有3天过期"></list-cell>
			<list-cell icon="icon-dizhi" iconColor="#5fcda2" title="充值记录" @eventClick="navTo('/pages/address/address')"></list-cell>
			<list-cell icon="icon-share" iconColor="#9789f7" title="充点记录" tips="邀请好友赢10万大礼"></list-cell>
			<list-cell icon="icon-pinglun-copy" iconColor="#ee883b" title="附近电站" tips="晒单抢红包"></list-cell>
			<list-cell icon="icon-shoucang_xuanzhongzhuangtai" iconColor="#54b4ef" title="常见问题"></list-cell>
			<list-cell icon="icon-shezhi1" iconColor="#5fcda2" title="电卡充值"></list-cell>
			<list-cell icon="icon-shezhi1" iconColor="#9789f7" title="我要加盟"></list-cell>
			<list-cell icon="icon-shezhi1" iconColor="#ee883b" title="我的消息"></list-cell>
			<list-cell icon="icon-shezhi1" iconColor="#54b4ef" title="下载APP"></list-cell>
			<list-cell icon="icon-shezhi1" iconColor="#e07472" title="关于我们" border=""></list-cell>
		</view>
		<!-- 底部操作菜单 -->
		<view class="page-bottom">
			<navigator url="/pages/index/index" open-type="switchTab" class="p-b-btn">
				<text class="yticon icon-xiatubiao--copy"></text>
				<text>充电中</text>
			</navigator>
			<navigator url="/pages/cart/cart" open-type="switchTab" class="p-b-btn">
				<text class="yticon icon-gouwuche"></text>
				<text>扫码充电</text>
			</navigator>
			<navigator url="/pages/cart/cart" open-type="switchTab" class="p-b-btn">
				<text class="yticon icon-gouwuche"></text>
				<text>我的</text>
			</navigator>
		</view>
		<view class="cu-load load-modal" v-if="loadModal">
			<!-- <view class="cuIcon-emojifill text-orange"></view> -->
			<image src="/static/logo.png" mode="aspectFit"></image>
			<view class="gray-text">加载中...</view>
		</view>
    </view>
</template>
<script>
	import listCell from '@/components/mix-list-cell';
    export default {
      components: {
        listCell
      },
	  data() {
		return {
			loadModal: false  
		}
	  },
	  methods: {
		  LoadModal() {
			  this.loadModal = true;
			setTimeout(() => {
				this.loadModal = false;
			}, 2000)
		  }
	  }
    }
</script>
<style lang="scss">
	.user-section{
		height: 320upx;
		padding: 80upx 30upx 0;
		position:relative;
		.bg{
			position:absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			filter: blur(1px);
			opacity: .7;
		}
	}
	.user-info-box{
		height: 180upx;
		display:flex;
		align-items:center;
		position:relative;
		z-index: 1;
		.portrait{
			width: 130upx;
			height: 130upx;
			border:5upx solid #fff;
			border-radius: 50%;
		}
		.username{
			font-size: $font-lg + 6upx;
			color: $font-color-dark;
			margin-left: 20upx;
		}
	}
  .history-section{
		padding: 30upx 0 0;
		padding-bottom: 110upx;
		margin-top: 20upx;
		background: #fff;
		border-radius:10upx;
		.sec-header{
			display:flex;
			align-items: center;
			font-size: $font-base;
			color: $font-color-dark;
			line-height: 40upx;
			margin-left: 30upx;
			.yticon{
				font-size: 44upx;
				color: #5eba8f;
				margin-right: 16upx;
				line-height: 40upx;
			}
		}
		.h-list{
			white-space: nowrap;
			padding: 30upx 30upx 0;
			image{
				display:inline-block;
				width: 160upx;
				height: 160upx;
				margin-right: 20upx;
				border-radius: 10upx;
			}
		}
	}
	/* 底部操作菜单 */
	.page-bottom{
		position: fixed;
		z-index: 999;
		bottom: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100upx;
		background: #fff;
		box-shadow: 0 0 20upx 0 rgba(0,0,0,.5);
		border-radius: 8upx;
		.p-b-btn{
			display:flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: $font-sm;
			color: $font-color-base;
			width: 120upx;
			height: 80upx;
			.yticon{
				font-size: 40upx;
				line-height: 48upx;
				color: $font-color-light;
			}
			&.active, &.active .yticon{
				color: $uni-color-primary;
			}
			.icon-fenxiang2{
				font-size: 42upx;
				transform: translateY(-2upx);
			}
			.icon-shoucang{
				font-size: 46upx;
			}
		}
		.action-btn-group{
			display: flex;
			height: 76upx;
			border-radius: 100px;
			overflow: hidden;
			box-shadow: 0 20upx 40upx -16upx #fa436a;
			box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
			background: linear-gradient(to right, #ffac30,#fa436a,#F56C6C);
			margin-left: 20upx;
			position:relative;
			&:after{
				content: '';
				position:absolute;
				top: 50%;
				right: 50%;
				transform: translateY(-50%);
				height: 28upx;
				width: 0;
				border-right: 1px solid rgba(255,255,255,.5);
			}
			.action-btn{
				display:flex;
				align-items: center;
				justify-content: center;
				width: 180upx;
				height: 100%;
				font-size: $font-base ;
				padding: 0;
				border-radius: 0;
				background: transparent;
			}
		}
	}
</style>
