edit =  'e'
add =  'a'
inp = input("Opetations : \n\t[e] edit\n\t[a] add book\n\t->")

if inp == edit:
    for i in range(0,open("data.txt",'r').read().split('\n').__len__()):
        print(str(i) + "\t"+ open("data.txt",'r').read().split('\n')[i])
    g = input("what line to change? : ")
    print(open("data.txt",'r').read().split('\n')[g])
    a = input("new line:\n")
    r= ""
    for i in range(0,open("data.txt",'r').read().split('\n').__len__()):
        if not(g==i):
            r += (open("data.txt",'r').read().split('\n')[i]) + "\n"
        else:
            r+= a + "\n"
    open("data.txt",'w').close()
    open("data.txt",'w').write(r)
if inp == add:
    open("data.txt",'a').write("\n"+input("your new line\n") )