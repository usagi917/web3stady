class MultiplicationTable:
    @classmethod
    def print_table(cls):
        for i in range(1, 13):
            for j in range(1, 13):
                print(f'{i * j:4}', end='')
            print()  

# クラスメソッドの呼び出し
MultiplicationTable.print_table()
