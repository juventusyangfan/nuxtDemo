<template lang="html">
    <ul>
        <scroller v-bind:style="{ marginTop: marginTop}" :on-refresh="refresh" :on-infinite="infinite">
            <li class="not_eng_item" v-for="item in GoodsList">
                <router-link class="not_eng_link" :to="'/detail/'+item.goods_id">
                    <img v-lazy="fileHost+item.image_url" alt="" class="not_eng_pic lazy-img-fadein">
                    <div class="not_eng_info">
                        <p class="not_eng_title blue">{{item.product_name}} <span class="black">{{item.gg}} {{item.jc}}</span>
                        </p>
                        <p class="not_eng_text">
                            <span class="more_info_price_txt grey">{{item.company_name}}</span>
                            <i class="fr"><span class="red">¥ {{item.price_scale.length != 0?item.price_scale.level1:item.price}}</span>{{item.unit}}/天
                            <div class="ico_price_scale fr" v-show="item.price_scale.length != 0"></div></i>
                        </p>
                    </div>
                </router-link>
            </li>
            <div class="clear"></div>
        </scroller>
    </ul>
</template>

<script>
    import config from '../assets/js/config.js';

    export default {
        props: ['goods_list', 'margintop'],
        data() {
            return {
                GoodsList: this.goods_list,
                marginTop: this.margintop,
                fileHost: config.imagePath,
                page: 1
            }
        },
        watch: {
            goods_list: function () {
                this.GoodsList = [];
                this.GoodsList = this.GoodsList.concat(this.goods_list);
                console.log(this.GoodsList)
            }
        },
        methods: {
            refresh(done) {
                this.page = 1;
                this.$emit("getGoodsList", this.page, done);
            },
            infinite(done) {
                if (this.GoodsList.length > 0) {
                    this.page = this.page + 1;
                    this.$emit("getGoodsList", this.page, done);
                }
                else {
                    done();
                }
            }
        }
    }
</script>
