// 此种java写法 大量参考了网上的写法 而且有些地方并不了解
//java 写法有很多种 每种算法都需要研究
// 做了一次代码的搬运工 并不是很理解
//  继续弄懂这个问题。。

// linklist 写法
public class Solution {
public int lengthOfLongestSubstring(String s) {
ArrayList<Character> list=new ArrayList();
int count=0,max=0;
for(int i=0;i<s.length();i++) {
if(list.contains(s.charAt(i))){
int limit=list.indexOf(s.charAt(i));
max=Math.max(max,count);
for(int n=0;n<=limit;n++,count--) list.remove(0);
//list.add(s.charAt(i));
}
list.add(s.charAt(i));
count++;
}
return Math.max(max,count);
}
}

//hash Set


public class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length();
        int ans = 0;
        for (int i = 0; i < n; i++)
            for (int j = i + 1; j <= n; j++)
                if (allUnique(s, i, j)) ans = Math.max(ans, j - i);
        return ans;
    }

    public boolean allUnique(String s, int start, int end) {
        Set<Character> set = new HashSet<>();
        for (int i = start; i < end; i++) {
            Character ch = s.charAt(i);
            if (set.contains(ch)) return false;
            set.add(ch);
        }
        return true;
    }
}

// Hashmap
public class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length(), ans = 0;
        Map<Character, Integer> map = new HashMap<>(); // current index of character
        // try to extend the range [i, j]
        for (int j = 0, i = 0; j < n; j++) {
            if (map.containsKey(s.charAt(j))) {
                i = Math.max(map.get(s.charAt(j)), i);
            }
            ans = Math.max(ans, j - i + 1);
            map.put(s.charAt(j), j + 1);
        }
        return ans;
    }
}
