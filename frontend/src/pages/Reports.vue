<template>
    <div class="row">
      <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <base-table :title="table2.title" :sub-title="table2.subTitle" :data="table2.data"
                         :columns="table2.columns">
            </base-table>
          </div>
        </card>
      </div>

    </div>
</template>
<script>
import { BaseTable } from "@/components";
const tableColumns = ["Relatórios", "Criado Por", "Data Criação"];
const tableData = [
  {
    id: 1,
    'relatórios': "Resíduos por Mês",
    'criado por': "Gustavo",
    'data criação': "02/12/2021"
  },
  {
    id: 1,
    'relatórios': "Resíduos por Rua",
    'criado por': "Gustavo",
    'data criação': "02/12/2021"
  }
];

export default {
  components: {
    BaseTable
  },
  data() {
    return {
      table2: {
        title: "Table on Plain Background",
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  }
};
</script>
<style>
</style>
