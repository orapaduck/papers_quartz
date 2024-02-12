def arrySum(a):
  arrSum = [0] * (len(a))
  for k in range(1, len(a)):
      if k==1 :
          s=a[1]
      else: 
          s=arrSum[k-1] + a[k]
      arrSum[k]=s  

  return arrSum

def binaryIndexTree(a):
        tree = [0] * len(a)
        for k in range(1,  len(a) ):
            tree[k] =  P[k] - P[k-dpos(k)]
        return tree

def dpos(k):
    return k & -k

def prifixSum(k) : 
       s=0
       while k>=1:
             s = s + T[k]
             k = k - dpos(k)
       return s

def partSum(i,j) : 
       return prifixSum(j)-prifixSum(i-1)

def updateItem(a,k,x):
      d=x-A[k]
      A[k]=x
      while k<len(a):
          T[k]=T[k]+d
          k=k + dpos(k)

A=[0,2,3,1,5,0,6,5,8,2,9] 
P=arrySum(A)
print("P=", P)

T=binaryIndexTree(A)

print("A=",A), print("T=",T)
updateItem(A,1,0)
print("updateing (1,0)")
print("A=",A), print("T=",T)
print( prifixSum(10) ), print( partSum(7,9) )