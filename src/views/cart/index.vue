<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>购物车</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="cartProducts"
      style="width: 100%"
    >
      <el-table-column
        width="55">
        <el-checkbox size="mini" slot="header"></el-checkbox>
        <template slot-scope="scope">
          <el-checkbox size="mini" v-model="scope.row.isChecked"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="商品">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价">
      </el-table-column>
      <el-table-column
        prop="count"
        label="数量">
        <template slot-scope="scope">
          <el-input-number v-model="scope.row.count" size="mini"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column
        prop="price"
        label="小计">
      </el-table-column>
      <el-table-column
        label="操作">
        <template>
          <el-button size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <p>已选 <span>xxx</span> 件商品，总价：<span>xxx</span></p>
      <el-button type="danger">结算</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartIndex',
  data () {
    return {
      cartProducts: [
        { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, isChecked: false, count: 0 },
        { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, isChecked: false, count: 0 },
        { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, isChecked: false, count: 0 }
      ]
    }
  }
}
</script>

<style></style>
